<?php

namespace App\Controller\Admin;

use Silex\Application;
use App\Model;
use App\Form;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Validator\Constraints as Assert;

class BlogController implements \Silex\Api\ControllerProviderInterface
{
    public function connect(Application $app)
    {
        $controllers = $app['controllers_factory'];

        $controllers->get('/post/page/{page}/', [$this, 'postList'])->assert('page', '\d+')->value('page', 1)->bind('post');
        $controllers->get('/post/add/', [$this, 'postEdit'])->method('get|post')->bind('post_add');
        $controllers->get('/post/{id}/', [$this, 'postEdit'])->assert('id', '\d+')->method('get|post')->bind('post_edit');

        $controllers->get('/tags/', [$this, 'tagList'])->bind('tag');
        $controllers->get('/tags/add/', [$this, 'tagEdit'])->method('get|post')->bind('tag_add');
        $controllers->get('/tags/{id}/', [$this, 'tagEdit'])->assert('id', '\d+')->method('get|post')->bind('tag_edit');

        return $controllers;
    }

    public function postList(Application $app, Request $request, $page)
    {
        $title = 'Posts';
        $postModel = $app['post.model'];

        $sort_by = 'id';
        $sort_order = 'DESC';

        if ($request->get('sort_by')) {
            $sort_by = $request->get('sort_by');

            if ($request->get('sort_order')) {
                $sort_order = $request->get('sort_order');
            }
        }

        $filter_value = $request->get('filter');
        $filter = [];
        foreach ($postModel->getFilterKeys() as $key) {
            $filter[$key] = $filter_value;
        }

        $posts = $postModel->filterBy($filter, [$sort_by => $sort_order], $app['paginator.per_page'], ($page - 1) * $app['paginator.per_page']);
        $posts_count = $postModel->countLastQuery();

        return $app['twig']->render('admin/list.twig', [
            'title' => $title,
            'table_head' => $postModel->getFilterKeys(),
            'items' => $posts,
            'items_count' => $posts_count,
            'paginator' => $app['paginator']($page, $posts_count)
        ]);
    }

    public function postEdit(Application $app, Request $request, $id = null)
    {
        $title = 'Post ' . ($id ? 'edit' : 'add');
        $data = ($id) ? $app['post.model']->find($id) : $app['post.model'];

        $form = $app['form.factory']->createBuilder(new Form\PostType($app), $data)->getForm();

        $form->handleRequest($request);

        if ($form->isValid()) {
            $post = $form->getData();
            $post->save();

            return $app->redirect($app->path('post'));
        }

        return $app['twig']->render('admin/form.twig', ['title' => $title, 'form' => $form->createView()]);
    }
    public function tagEdit(Application $app, Request $request, $id = null)
    {
        $title = 'Tag ' . ($id ? 'edit' : 'add');
        $data = ($id) ? $app['tag.model']->find($id) : $app['tag.model'];

        $form = $app['form.factory']->createBuilder(new Form\TagType($app), $data)->getForm();

        $form->handleRequest($request);

        if ($form->isValid()) {
            $post = $form->getData();
            $post->save();

            return $app->redirect($app->path('tag'));
        }

        return $app['twig']->render('admin/form.twig', ['title' => $title, 'form' => $form->createView()]);
    }

    public function tagList(Application $app, Request $request)
    {
        $title = 'Tags';
        $model = $app['tag.model'];

        $sort_by = 'id';
        $sort_order = 'DESC';

        if ($request->get('sort_by')) {
            $sort_by = $request->get('sort_by');

            if ($request->get('sort_order')) {
                $sort_order = $request->get('sort_order');
            }
        }

        $filter_value = $request->get('filter');
        $filter = [];
        foreach ($model->getFilterKeys() as $key) {
            $filter[$key] = $filter_value;
        }

        $posts = $model->filterBy($filter, [$sort_by => $sort_order]);
        $posts_count = $model->countLastQuery();

        return $app['twig']->render('admin/list.twig', [
            'title' => $title,
            'table_head' => $model->getFilterKeys(),
            'items' => $posts,
            'items_count' => $posts_count,
        ]);
    }

}
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
        //crud contact

        $controllers->get('/post/', function () use ($app) {
            return $app->redirect('/admin/post/page/1/');
        });
        $controllers->get('/post/page/{page}/', [$this, 'postList'])->assert('page', '\d+')->value('page', 1)->bind('post_list');
        $controllers->get('/post/{id}/', [$this, 'postEdit'])->assert('id', '\d+')->method('get|post')->bind('post');
        $controllers->get('/post/add/', [$this, 'postEdit'])->method('get|post')->bind('post_add');

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
//        $posts_count = $postModel->countLastQuery();

        return $app['twig']->render('admin/list.twig', [
            'title' => $title,
            'table_head' => $postModel->getFilterKeys(),
            'items' => $posts,
            'paginator' => $app['paginator']($page, 10)
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

            return $app->redirect($app->path('post_list'));
        }

        return $app['twig']->render('admin/form.twig', ['title' => $title, 'form' => $form->createView()]);
    }

}
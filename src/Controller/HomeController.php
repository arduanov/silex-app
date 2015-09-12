<?php

namespace App\Controller;

use App\Application;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Validator\Constraints as Assert;

class HomeController
{
    public function indexAction(Application $app, Request $reqeust)
    {
        $where = new \PommProject\Foundation\Where('role = $*', ['seller']);
//phpinfo();
        $sellers = $app['user.model']->paginateFindWhere($where, 20);
//        foreach ($computers as $computer) {
//            printf(
//                $computer['id']);
//        }
//        print_r($sellers->getIterator()->extract());exit;
        $data = ['tracks' => $sellers->getIterator()];
//        print_r(get_included_files());
//throw new \Exception(123);

        $response = new Response();
//        $response->setMaxAge(30);
        $response->setSharedMaxAge(30);
        $response->setTtl(30);

        return $app->render('projects.twig', $data, $response);
    }

    public function record(Application $app, Request $reqeust)
    {
        \SimpleRecord\Record::connection($app['db']);
        $post = new \Model\Post();
        $post->description = 'descr55';
        $result = $post->save();

//        $post = new \Model\Post();
//        $db_post = $post->findOne();
//        $result = $post->save();

//        $db_post->name  = 'testname';
//        $db_post->save();

//        $db_post = $post->findAll();
//print_r(get_included_files());exit;
        return '';
        return $app->json(['result'=>$db_post]);
    }

    public function test(Application $app, Request $reqeust)
    {
//        $app->abort(404, "Post  does not exist.");

        return $app->render('admin/layout.twig', []);
    }

    public function test2(Application $app, Request $request)
    {
        $data = [
            'name' => 'Your name',
            'email' => 'Your email',
        ];

        $form = $app['form.factory']->createBuilder('form', $data)
                                    ->add('name', 'text',
                                        [
                                            'constraints' => [new Assert\NotBlank(), new Assert\Length(['max' => 2])]
                                        ])
                                    ->add('email')
                                    ->add('gender', 'choice', [
                                        'choices' => [1 => 'male', 2 => 'female'],
                                        'expanded' => true,
                                    ])
                                    ->add('submit', 'submit')
                                    ->getForm();

        $form->handleRequest($request);

        if ($form->isValid()) {
            $data = $form->getData();

            // do something with the data

            // redirect somewhere
            return $app->redirect('/test2');
        }

//        print_r(get_included_files());

        return $app['twig']->render('admin/form.twig', ['form' => $form->createView()]);
    }

    public function sidebarAction(Application $app, Request $reqeust)
    {
 return '';
        return $app->render('project.twig', $data, $response);
    }

    public function tracksAction(Application $app, Request $reqeust)
    {
        $sellers = $app['track.model']->findWithMetadata();
        $data = [];
//        $data = ['tracks' => $sellers->getIterator()];
        //  print_r($sellers);
//phpinfo();
        return $app->json($sellers);//$app->render('project.twig', $data);
    }
}
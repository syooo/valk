<?php

namespace Valk\DatabaseBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction($name)
    {
        return $this->render('ValkDatabaseBundle:Static:index.html.twig', array('name' => $name));
    }
}

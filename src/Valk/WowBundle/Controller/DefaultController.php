<?php

namespace Valk\WowBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction($name)
    {
        return $this->render('ValkWowBundle:Static:index.html.twig', array('name' => $name));
    }
}

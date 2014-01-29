<?php

namespace Valk\ArmoryBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction($name)
    {
        return $this->render('ValkArmoryBundle:Static:index.html.twig', array('name' => $name));
    }
}

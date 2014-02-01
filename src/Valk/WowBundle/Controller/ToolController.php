<?php

namespace Valk\WowBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class ToolController extends Controller
{
    public function talentCalculatorAction()
    {
        return $this->render('ValkWowBundle:Tool:talentCalculator.html.twig');
    }
}

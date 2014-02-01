<?php

namespace Valk\WowBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Valk\WowBundle\Util\Character as CharacterUtil;

class ToolController extends Controller
{
    public function talentCalculatorAction()
    {

        return $this->render('ValkWowBundle:Tool:talentCalculator.html.twig', array(
            'classes' => CharacterUtil::$classes
        ));
    }
}

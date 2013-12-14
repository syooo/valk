<?php

namespace Valk\Bundle\MainBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\Security\Core\SecurityContext;
use Valk\Bundle\MainBundle\Service;

class PagesController extends Controller
{
    /**
     * @return \Symfony\Component\HttpFoundation\Response
     * @template()
     */
    public function indexAction()
    {
        $this->get('twig')->addGlobal('is_front', true);

        return array();
    }

    /**
     * @return \Symfony\Component\HttpFoundation\Response
     * @template()
     */
    public function howToStartAction()
    {
        return array();
    }

    /**
     * @return \Symfony\Component\HttpFoundation\Response
     * @template()
     */
    public function loginAction()
    {
        $request = $this->getRequest();
        $session = $request->getSession();

        // get the login error if there is one
        if ($request->attributes->has(SecurityContext::AUTHENTICATION_ERROR)) {
            $error = $request->attributes->get(
                SecurityContext::AUTHENTICATION_ERROR
            );
        } else {
            $error = $session->get(SecurityContext::AUTHENTICATION_ERROR);
            $session->remove(SecurityContext::AUTHENTICATION_ERROR);
        }

        return array(
                // last username entered by the user
                'last_username' => $session->get(SecurityContext::LAST_USERNAME),
                'error'         => $error,
        );
    }
}

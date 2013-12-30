<?php

namespace Valk\Bundle\TalentCalculatorBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

class DefaultController extends Controller
{
    /**
     * @param $class
     * @param $build
     * @return \Symfony\Component\HttpFoundation\Response
     * @template()
     */
    public function indexAction($class, $build) {

        if (is_numeric($class)) {
            $className = $this->getClassNameById($class);
            $classId = $class;
        } else {
            $className = strtolower($class);
            $classId = $this->getClassIdByName($className);
        }

        if (!$classId || !$className) {
            throw $this->createNotFoundException('Class not found');
        }

        return array(
            'classId' => $classId,
            'className' => ucfirst($className),
            'build' => $build
        );
    }

    // TODO: Прописать в классе плеера.

    /**
     * @param $id
     * @return null|string
     */
    private function getClassNameById($id) {
        switch($id) {
            case 1: return "Warrior";
            case 2: return "Paladin";
            case 3: return "Hunter";
            case 4: return "Rogue";
            case 5: return "Priest";
            case 7: return "Shaman";
            case 8: return "Mage";
            case 9: return "Warlock";
            case 11: return "Druid";
            default: return null;
        }
    }

    /**
     * @param $id
     * @return null|string
     */
    private function getClassIdByName($name) {
        switch($name) {
            case "warrior":     return 1;
            case "paladin":     return 2;
            case "hunter":      return 3;
            case "rogue":       return 4;
            case "priest":      return 5;
            case "shaman":      return 7;
            case "mage":        return 8;
            case "warlock":     return 9;
            case "druid":       return 11;
            default:            return 0;
        }
    }
}

<?php

namespace Valk\AccountBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Autobroadcast
 */
class Autobroadcast
{
    /**
     * @var integer
     */
    private $id;

    /**
     * @var string
     */
    private $text;

    /**
     * @var integer
     */
    private $next;


    /**
     * Get id
     *
     * @return integer 
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set text
     *
     * @param string $text
     * @return Autobroadcast
     */
    public function setText($text)
    {
        $this->text = $text;

        return $this;
    }

    /**
     * Get text
     *
     * @return string 
     */
    public function getText()
    {
        return $this->text;
    }

    /**
     * Set next
     *
     * @param integer $next
     * @return Autobroadcast
     */
    public function setNext($next)
    {
        $this->next = $next;

        return $this;
    }

    /**
     * Get next
     *
     * @return integer 
     */
    public function getNext()
    {
        return $this->next;
    }
}

<?php

namespace Valk\Bundle\MainBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Autobroadcast
 *
 * @ORM\Table(name="autobroadcast")
 * @ORM\Entity
 */
class Autobroadcast
{
    /**
     * @var string
     *
     * @ORM\Column(name="text", type="text", nullable=false)
     */
    private $text;

    /**
     * @var integer
     *
     * @ORM\Column(name="next", type="integer", nullable=false)
     */
    private $next;

    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $id;



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

    /**
     * Get id
     *
     * @return integer 
     */
    public function getId()
    {
        return $this->id;
    }
}

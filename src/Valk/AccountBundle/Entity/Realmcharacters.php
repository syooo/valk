<?php

namespace Valk\AccountBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Realmcharacters
 */
class Realmcharacters
{
    /**
     * @var integer
     */
    private $realmid;

    /**
     * @var integer
     */
    private $acctid;

    /**
     * @var boolean
     */
    private $numchars;


    /**
     * Set realmid
     *
     * @param integer $realmid
     * @return Realmcharacters
     */
    public function setRealmid($realmid)
    {
        $this->realmid = $realmid;

        return $this;
    }

    /**
     * Get realmid
     *
     * @return integer 
     */
    public function getRealmid()
    {
        return $this->realmid;
    }

    /**
     * Set acctid
     *
     * @param integer $acctid
     * @return Realmcharacters
     */
    public function setAcctid($acctid)
    {
        $this->acctid = $acctid;

        return $this;
    }

    /**
     * Get acctid
     *
     * @return integer 
     */
    public function getAcctid()
    {
        return $this->acctid;
    }

    /**
     * Set numchars
     *
     * @param boolean $numchars
     * @return Realmcharacters
     */
    public function setNumchars($numchars)
    {
        $this->numchars = $numchars;

        return $this;
    }

    /**
     * Get numchars
     *
     * @return boolean 
     */
    public function getNumchars()
    {
        return $this->numchars;
    }
}

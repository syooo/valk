<?php

namespace Valk\AccountBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Account
 */
class Account
{
    /**
     * @var integer
     */
    private $id;

    /**
     * @var string
     */
    private $username;

    /**
     * @var string
     */
    private $shaPassHash;

    /**
     * @var boolean
     */
    private $gmlevel;

    /**
     * @var string
     */
    private $sessionkey;

    /**
     * @var string
     */
    private $v;

    /**
     * @var string
     */
    private $s;

    /**
     * @var string
     */
    private $email;

    /**
     * @var \DateTime
     */
    private $joindate;

    /**
     * @var string
     */
    private $lastIp;

    /**
     * @var integer
     */
    private $failedLogins;

    /**
     * @var boolean
     */
    private $locked;

    /**
     * @var \DateTime
     */
    private $lastLogin;

    /**
     * @var integer
     */
    private $activeRealmId;

    /**
     * @var integer
     */
    private $mutetime;

    /**
     * @var boolean
     */
    private $locale;

    /**
     * @var string
     */
    private $regIp;

    /**
     * @var string
     */
    private $clientInfo;


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
     * Set username
     *
     * @param string $username
     * @return Account
     */
    public function setUsername($username)
    {
        $this->username = $username;

        return $this;
    }

    /**
     * Get username
     *
     * @return string 
     */
    public function getUsername()
    {
        return $this->username;
    }

    /**
     * Set shaPassHash
     *
     * @param string $shaPassHash
     * @return Account
     */
    public function setShaPassHash($shaPassHash)
    {
        $this->shaPassHash = $shaPassHash;

        return $this;
    }

    /**
     * Get shaPassHash
     *
     * @return string 
     */
    public function getShaPassHash()
    {
        return $this->shaPassHash;
    }

    /**
     * Set gmlevel
     *
     * @param boolean $gmlevel
     * @return Account
     */
    public function setGmlevel($gmlevel)
    {
        $this->gmlevel = $gmlevel;

        return $this;
    }

    /**
     * Get gmlevel
     *
     * @return boolean 
     */
    public function getGmlevel()
    {
        return $this->gmlevel;
    }

    /**
     * Set sessionkey
     *
     * @param string $sessionkey
     * @return Account
     */
    public function setSessionkey($sessionkey)
    {
        $this->sessionkey = $sessionkey;

        return $this;
    }

    /**
     * Get sessionkey
     *
     * @return string 
     */
    public function getSessionkey()
    {
        return $this->sessionkey;
    }

    /**
     * Set v
     *
     * @param string $v
     * @return Account
     */
    public function setV($v)
    {
        $this->v = $v;

        return $this;
    }

    /**
     * Get v
     *
     * @return string 
     */
    public function getV()
    {
        return $this->v;
    }

    /**
     * Set s
     *
     * @param string $s
     * @return Account
     */
    public function setS($s)
    {
        $this->s = $s;

        return $this;
    }

    /**
     * Get s
     *
     * @return string 
     */
    public function getS()
    {
        return $this->s;
    }

    /**
     * Set email
     *
     * @param string $email
     * @return Account
     */
    public function setEmail($email)
    {
        $this->email = $email;

        return $this;
    }

    /**
     * Get email
     *
     * @return string 
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Set joindate
     *
     * @param \DateTime $joindate
     * @return Account
     */
    public function setJoindate($joindate)
    {
        $this->joindate = $joindate;

        return $this;
    }

    /**
     * Get joindate
     *
     * @return \DateTime 
     */
    public function getJoindate()
    {
        return $this->joindate;
    }

    /**
     * Set lastIp
     *
     * @param string $lastIp
     * @return Account
     */
    public function setLastIp($lastIp)
    {
        $this->lastIp = $lastIp;

        return $this;
    }

    /**
     * Get lastIp
     *
     * @return string 
     */
    public function getLastIp()
    {
        return $this->lastIp;
    }

    /**
     * Set failedLogins
     *
     * @param integer $failedLogins
     * @return Account
     */
    public function setFailedLogins($failedLogins)
    {
        $this->failedLogins = $failedLogins;

        return $this;
    }

    /**
     * Get failedLogins
     *
     * @return integer 
     */
    public function getFailedLogins()
    {
        return $this->failedLogins;
    }

    /**
     * Set locked
     *
     * @param boolean $locked
     * @return Account
     */
    public function setLocked($locked)
    {
        $this->locked = $locked;

        return $this;
    }

    /**
     * Get locked
     *
     * @return boolean 
     */
    public function getLocked()
    {
        return $this->locked;
    }

    /**
     * Set lastLogin
     *
     * @param \DateTime $lastLogin
     * @return Account
     */
    public function setLastLogin($lastLogin)
    {
        $this->lastLogin = $lastLogin;

        return $this;
    }

    /**
     * Get lastLogin
     *
     * @return \DateTime 
     */
    public function getLastLogin()
    {
        return $this->lastLogin;
    }

    /**
     * Set activeRealmId
     *
     * @param integer $activeRealmId
     * @return Account
     */
    public function setActiveRealmId($activeRealmId)
    {
        $this->activeRealmId = $activeRealmId;

        return $this;
    }

    /**
     * Get activeRealmId
     *
     * @return integer 
     */
    public function getActiveRealmId()
    {
        return $this->activeRealmId;
    }

    /**
     * Set mutetime
     *
     * @param integer $mutetime
     * @return Account
     */
    public function setMutetime($mutetime)
    {
        $this->mutetime = $mutetime;

        return $this;
    }

    /**
     * Get mutetime
     *
     * @return integer 
     */
    public function getMutetime()
    {
        return $this->mutetime;
    }

    /**
     * Set locale
     *
     * @param boolean $locale
     * @return Account
     */
    public function setLocale($locale)
    {
        $this->locale = $locale;

        return $this;
    }

    /**
     * Get locale
     *
     * @return boolean 
     */
    public function getLocale()
    {
        return $this->locale;
    }

    /**
     * Set regIp
     *
     * @param string $regIp
     * @return Account
     */
    public function setRegIp($regIp)
    {
        $this->regIp = $regIp;

        return $this;
    }

    /**
     * Get regIp
     *
     * @return string 
     */
    public function getRegIp()
    {
        return $this->regIp;
    }

    /**
     * Set clientInfo
     *
     * @param string $clientInfo
     * @return Account
     */
    public function setClientInfo($clientInfo)
    {
        $this->clientInfo = $clientInfo;

        return $this;
    }

    /**
     * Get clientInfo
     *
     * @return string 
     */
    public function getClientInfo()
    {
        return $this->clientInfo;
    }
}

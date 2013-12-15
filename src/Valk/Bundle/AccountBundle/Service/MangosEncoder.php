<?php
/**
 * Created by PhpStorm.
 * User: syooo
 * Date: 14.12.13
 * Time: 4:22
 */

namespace Valk\Bundle\AccountBundle\Service;

use Doctrine\ORM\EntityNotFoundException;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\Security\Core\Encoder\PasswordEncoderInterface;

class MangosEncoder implements PasswordEncoderInterface {

    const MAX_PASSWORD_LENGTH = 16;

    /**
     * @inheritDoc
     */
    public function encodePassword($raw, $salt)
    {
        if (!$this->checkPasswordLength($raw))
        {
            throw new BadRequestHttpException();
        }

        $pass = strtoupper($salt . $raw);
        return hash('sha1', $pass);
    }

    /**
     * @inheritDoc
     */
    public function isPasswordValid($encoded, $raw, $salt)
    {
        return  $encoded === $this->encodePassword($raw, $salt);
    }

    private function checkPasswordLength($raw)
    {
        return strlen($raw) <= static::MAX_PASSWORD_LENGTH;
    }
} 
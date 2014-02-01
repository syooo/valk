<?php
/**
 * Created by PhpStorm.
 * User: hyperion
 * Date: 01.02.14
 * Time: 9:01
 */

namespace Valk\WowBundle\Util;

/**
 * Class Character
 * @package Valk\WowBundle\Util
 * @author Artem Korneev <gabriel.violet.dream@gmail.com>
 */
class Character {
    /**
     * Returns array of available classes
     * @var array
     */
    public static $classes = array(
      1  => 'warrior',
      2  => 'paladin',
      3  => 'hunter',
      4  => 'rogue',
      5  => 'priest',
      7  => 'shaman',
      8  => 'mage',
      9  => 'warlock',
      11 => 'druid'
    );

} 
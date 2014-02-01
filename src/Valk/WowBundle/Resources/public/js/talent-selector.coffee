class TalentSelector
  calc: null
  tabs: null
  cache: {}
  instances: {}
  CLASS_MAP:
      1: 'warrior'
      2: 'paladin'
      3: 'hunter'
      4: 'rogue'
      5: 'priest'
      7: 'shaman'
      8: 'mage'
      9: 'warlock'
      11: 'druid'

  constructor: () ->
    @tabs = $('#calculator-selector a')
    @tabs.click (e) =>
      e.preventDefault()
      e.stopPropagation()
      @view $(e.currentTarget).data('id'), true

    window.onhashchange = (e) =>
      @openClass()

    @calc = $('#calculators')
    @openClass()

  openClass: () ->
    hash = Core.getHash()

    if hash and hash isnt '.'

      classIndex = 0

      for index, className of @CLASS_MAP
        if hash is className
          classIndex = index
          break

      if classIndex > 0
        location.replace "##{Hash.encode([classIndex, -1, -1])}#{Hash.delimiter}"
      else
        id = Hash.decode hash.substr(0, 1)

        if id[0] and id[0] > 0 and id[0] < 11
          @view id[0], false

  view: (id, reset) ->
    return false unless id
    $('#calculator-selector').addClass('picked')

    @tabs.removeClass('tab-active')
    $("#class-#{id}").addClass('tab-active')

    if @cache[id]
      @calc.find('.talent-calculator').hide()
      @cache[id].show()
      @instances[id].exportBuild()

      return false

    @load(id, reset)

    false

  load: (id, reset) ->
    location.replace('#.') if reset
    $('#calculator').removeClass('initial')

    # @TODO: Rewrite for pure js
    $.ajax {
      url: "/tool/talent-calculator/#{id}"
      type: 'GET'
      dataType: 'html'
      success: (response) ->
        @calc.find('.talent-calculator').hide()
        @cache[id] = $(response).appendTo(@calc)
        @instances[id].exportBuild()
        $('#select-class').hide()
    }

namespace "Valk.Wow", (exports) ->
  exports.TalentSelector = TalentSelector

$ ->
  talentSelector = new TalentSelector
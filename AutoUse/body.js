/*-------------------------------------------------
///////////////////////////////////////////////////
АвтоФайзы, АвтоБотл, АвтоСтики, АвтоМека, АвтоУрна
АвтоМидас
Автор: vk.com/lalka_karo4
///////////////////////////////////////////////////
-----------------------End-----------------------*/


var AutoUseCheck = function () {
    if (!AutoUse.checked) {
        
        Game.ScriptLogMsg('Script disabled: AutoUse', '#ff0000')
        return
    }
    
    Game.ScriptLogMsg('Script disabled: AutoUse v0.4.1', '#00ff00')
    GameEvents.SendEventClientSide('antiaddiction_toast', { "message": "Скрипт диактивирован в связи с обновлением!\nОбновление 15 августа", "duration": "15" })
    AutoUse.checked = false;
}

//Шаблон для добавление чекбокса
var AutoUse = Game.AddScript(1, "AutoUse", AutoUseCheck)

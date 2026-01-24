var DarkmodeAssist = { isOpen: false }
localStorage.setItem("dark_mode_switch", JSON.stringify(DarkmodeAssist))
export var darkmode = JSON.parse(localStorage.getItem('dark_mode_switch'))
export var darkON = darkmode.isOpen ? true : false;
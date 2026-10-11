fx_version 'cerulean'
game 'gta5'
author 'APEX'
version '4.0.3'
description 'Auren Speedometer: telemetry, editor, shift lights and built-in instrument layouts'
ui_page 'web/index.html'
client_scripts {'config.lua','client/framework.lua','client/registry.lua','client/models.lua','client/profiles.lua','client/bridge.lua','client/trip.lua','client/editor.lua','client/signals.lua','client/main.lua'}
files {
  'web/index.html','web/app/*.js','web/app/*.css','web/assets/*.ttf','web/assets/*.png','web/assets/materials/*.jpg','web/assets/models/*.png',
  'speedometers/aton/web/*.js','speedometers/aton/web/*.css','speedometers/aton/web/assets/*.ttf',
  'speedometers/felon/web/*.js','speedometers/felon/web/*.css','speedometers/felon/web/assets/felon/*.ttf',
  'speedometers/truck/web/*.js','speedometers/truck/web/*.css'
}

-- Built-in instruments live in this resource. Add a descriptor and publish its files in fxmanifest.lua.
local models = {
    {id='aton',name='ATON',width=472,height=296,accent='#ff1328',text='#e4eef9',
     scripts={'speedometers/aton/web/reference-digits.js','speedometers/aton/web/design.js','speedometers/aton/web/renderer.js'},
     styles={'speedometers/aton/web/hud.css','speedometers/aton/web/model.css'}},
    {id='felon',name='FELON',width=324,height=324,accent='#ed008b',text='#e4eef9',
     scripts={'speedometers/felon/web/felon.js','speedometers/felon/web/register.js'},
     styles={'speedometers/felon/web/felon.css'}},
    {id='truck',name='Caminhão',width=600,height=285,accent='#e32132',text='#f0f1ed',
     scripts={'speedometers/truck/web/layout-default.js','speedometers/truck/web/renderer.js'},
     styles={'speedometers/truck/web/model.css'}}
}
for _,spec in ipairs(models) do
    local accepted,reason=VeloRegistry.registerLocal(spec)
    if not accepted then print(('[Auren_Speedometer] Modelo %s: %s'):format(spec.id,tostring(reason))) end
end

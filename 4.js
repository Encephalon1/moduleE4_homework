function ElectricalAppliances() {
    this.electricalAppliancePlugIn = false
}

ElectricalAppliances.prototype.plugIn = function() {
    this.electricalAppliancePlugIn = true
}

ElectricalAppliances.prototype.unplug = function() {
    this.electricalAppliancePlugIn = false
}

ElectricalAppliances.prototype.power = function(power) {
    console.log(`Power of appliance is ${power}`)
}

function Lamps(light, lampType) {
    this.light = light,
    this.lampType = lampType
}

Lamps.prototype = new ElectricalAppliances();
Lamps.prototype.power = function(power) {
    console.log(`Power of lamp is ${power}`)
}

function HouseholdAppliances(name, appointment) {
    this.appointment = appointment,
    this.name = name
}

HouseholdAppliances.prototype = new ElectricalAppliances()

let deskLamp = new Lamps('bright yellow', 'desk lamp');
let microwave = new HouseholdAppliances('microwave', 'reheating food');
console.log(deskLamp, microwave);
deskLamp.plugIn();
console.log(deskLamp);
deskLamp.power(60);
microwave.power(2200);

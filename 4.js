function ElectricalAppliances(power) {
    this.power = power,
    this.electricalAppliancePlugIn = false
}

ElectricalAppliances.prototype.plugIn = function() {
    this.electricalAppliancePlugIn = true
}

ElectricalAppliances.prototype.unplug = function() {
    this.electricalAppliancePlugIn = false
}

function Lamps(power, light) {
    this.light = light,
    this.power = power
}

Lamps.prototype = new ElectricalAppliances()
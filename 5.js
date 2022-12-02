class ElectricalAppliances {
    constructor() {
        this.electricalAppliancePlugIn = false
    }
    
    plugIn() {
        this.electricalAppliancePlugIn = true
    }
    
    unplug() {
        this.electricalAppliancePlugIn = false
    }

    power(power) {
        console.log(`Power of appliance is ${power}`)
    }
}


class Lamps extends ElectricalAppliances {
    constructor(light, lampType) {
        //super(this.electricalAppliancePlugIn); без него тоже работает
        this.light = light;
        this.lampType = lampType;
    }

    power(power) {
        console.log(`Power of lamp is ${power}`)
    }
}


class HouseholdAppliances {
    constructor(name, appointment) {
        //super(this.electricalAppliancePlugIn);
        this.appointment = appointment;
        this.name = name;
    }
}


let deskLamp = new Lamps('bright yellow', 'desk lamp');
let microwave = new HouseholdAppliances('microwave', 'reheating food');
console.log(deskLamp, microwave);
deskLamp.plugIn();
console.log(deskLamp);
deskLamp.power(60);
microwave.power(2200);
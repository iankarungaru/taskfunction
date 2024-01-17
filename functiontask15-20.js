let form = document.getElementById('myform');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    let basic_salary = parseFloat(document.getElementById('basic_salary').value);
    let benefits = parseFloat(document.getElementById('benefits').value);
    if (isNaN(basic_salary) || isNaN(benefits)) {
        alert("Enter All Values");
    } else {
        let gross_salary = calc_gross(basic_salary, benefits);
        document.getElementById('gross_salary').innerHTML = gross_salary.toFixed(2);
        let nssf = calc_nssf(gross_salary);
        document.getElementById('nssf').innerHTML = nssf.toFixed(2);
        let nhif = calc_nhif(gross_salary);
        document.getElementById('nhif').innerHTML = nhif.toFixed(2);
        let nhdf = calc_nhdf(gross_salary);
        document.getElementById('nhdf').innerHTML = nhdf.toFixed(2);
        let taxable_income = calc_taxable_income(gross_salary, nssf, nhdf);
        let payee = calc_payee(taxable_income);
        document.getElementById('final_payee').innerHTML = payee.toFixed(2);
        let net_pay = gross_salary - (nhif + nhdf + nssf + payee);
        document.getElementById('net_pay').innerHTML = net_pay.toFixed(2);
    }
});function calc_gross(basic_salary, benefits) {
    let gross = basic_salary + benefits;
    return gross;
}
//question 15
function calc_nhif(gross_salary) {
    let nhif;
    if (gross_salary >= 0 && gross_salary <= 5999) {
        nhif = 150;
    } else if (gross_salary >= 6000 && gross_salary <= 7999) {
        nhif = 300;
    } else if (gross_salary >= 8000 && gross_salary <= 11999) {
        nhif = 400;
    } else if (gross_salary >= 12000 && gross_salary <= 14999) {
        nhif = 550;
    } else if (gross_salary >= 15000 && gross_salary <= 19999) {
        nhif = 750;
    } else if (gross_salary >= 20000 && gross_salary <= 29999) {
        nhif = 850;
    } else if (gross_salary >= 30000 && gross_salary <= 34999) {
        nhif = 900;
    } else if (gross_salary >= 35000 && gross_salary <= 39999) {
        nhif = 950;
    } else if (gross_salary >= 40000 && gross_salary <= 44999) {
        nhif = 1000;
    } else if (gross_salary >= 45000 && gross_salary <= 49999) {
        nhif = 1100;
    } else if (gross_salary >= 50000 && gross_salary <= 59999) {
        nhif = 1250;
    } else if (gross_salary >= 60000 && gross_salary <= 69999) {
        nhif = 1300;
    } else if (gross_salary >= 70000 && gross_salary <= 79999) {
        nhif = 1400;
    } else if (gross_salary >= 80000 && gross_salary <= 89999) {
        nhif = 1500;
    } else if (gross_salary >= 90000 && gross_salary <= 99999) {
        nhif = 1600;
    } else if (gross_salary >= 100000) {
        nhif = 1700;
    }
    return nhif;
}
//question 16
function calc_nssf(gross, rate = 0.06) {
    let nssf;
    if (gross > 18000) {
        nssf = 18000 * rate;
    } else {
        nssf = gross * rate;
    }
    return nssf;
}
//question 17
function calc_nhdf(gross_salary, rate = 0.015) {
    let nhdf = gross_salary * 0.015;
    return nhdf;
}
//question 18
function calc_taxable_income(gross_salary, nssf, nhdf) {
    let taxable_income = gross_salary - (nssf + nhdf);
    return taxable_income;
}
//question 19
function calc_payee(taxable_income, relief = 2400) {
    let payee;
    if (taxable_income >= 0 && taxable_income <= 24000) {
        payee = 0;
    } else if (taxable_income > 24000 && taxable_income <= 32333) {
        payee = ((taxable_income - 24000) * 0.25);
    } else if (taxable_income > 32333 && taxable_income <= 500000) {
        payee = ((taxable_income - 32333) * 0.3) + (8333 * 0.25);
    } else if (taxable_income > 500000 && taxable_income <= 800000) {
        payee = ((taxable_income - 500000) * 0.325) + (8333 * 0.25) + (467667 * 0.3);
    } else {
        payee = ((taxable_income - 800000) * 0.35) + (8333 * 0.25) + (467667 * 0.3) + (300000 * 0.325);
    }
    return payee;
}

let result = calc_payee(30000)
console.log(result)
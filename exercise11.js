$(function () {
    function Numobj(num, ptrn) {
        this.number = num;
        this.pattern = ptrn;
    }

    function Person(num, prsn) {
        this.num = num;
        this.personality = prsn;
    }

    var objlist = [];
    var obj = new Numobj(1, /[AIJQY]/i);
    objlist.push(obj);
    var obj = new Numobj(2, /[BKR]/i);
    objlist.push(obj);
    var obj = new Numobj(3, /[CGLS]/i);
    objlist.push(obj);
    var obj = new Numobj(4, /[DMT]/i);
    objlist.push(obj);
    var obj = new Numobj(5, /[EHNX]/i);
    objlist.push(obj);
    var obj = new Numobj(6, /[UVW]/i);
    objlist.push(obj);
    var obj = new Numobj(7, /[OZ]/i);
    objlist.push(obj);
    var obj = new Numobj(8, /[FP]/i);
    objlist.push(obj);

    var perlist = [];
    var person = new Person("1", ": You are very head strong");
    perlist.push(person);
    var person = new Person("2", ": You are friendly and caring");
    perlist.push(person);
    var person = new Person("3", ": You are a very sensitive person");
    perlist.push(person);
    var person = new Person("5", ": You are a very hardworking person");
    perlist.push(person);
    var person = new Person("6", ": You are very determined");
    perlist.push(person);
    var person = new Person("7", ": You enjoy mystery books and movies");
    perlist.push(person);
    var person = new Person("8", ": You radiate positivity");
    perlist.push(person);
    var person = new Person("9", ": You are confident");
    perlist.push(person);
    var person = new Person("11", ": You embrace your flaws");
    perlist.push(person);
    var person = new Person("22", ": You are a fun-loving person");
    perlist.push(person);
    var person = new Person("33", ": You encourage people to do their best");
    perlist.push(person);

    function getnum(x) {
        var sum = 0;
        for (var i = 0; i < x.length; i++) {
            for (var j = 0; j < objlist.length; j++) {
                if (objlist[j].pattern.test(x[i])) {
                    sum += objlist[j].number;
                }
            }
        }
        return sum;
    }

    function getres(x) {
        var pattern = /^((11)|(22)|(33))$/
        if (x < 10) {
            var y = x.toString();
            for (var i = 0; i < perlist.length; i++) {
                if (perlist[i].num == y) {
                    $('#response').html(perlist[i].personality);
                }
            }
        }
        else if (((x.toString()).match(pattern)) != null) {
            for (var i = 0; i < perlist.length; i++) {
                if (perlist[i].num == ((x.toString()).match(pattern))[0]) {
                    $('#response').html(perlist[i].personality);
                }
            }
        }
        else {
            var t = x % 10;
            var u = Math.floor(x / 10);
            getres(t + u);
        }
    }

    $('#mainsbt').on("click", function () {
        var name = $('#fname').val();
        var nsum = getnum(name);
        getres(nsum);
    })
})

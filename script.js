// Project 1: Find Roots of Quadratic Equation
function findRoots() {
  try {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let c = parseFloat(document.getElementById("c").value);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      throw "Please enter valid numbers for a, b, and c.";
    }

    let discriminant = b * b - 4 * a * c;
    let root1, root2;

    if (discriminant > 0) {
      root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      document.getElementById(
        "rootsOutput"
      ).innerText = `Roots are real and different: ${root1}, ${root2}`;
    } else if (discriminant === 0) {
      root1 = root2 = -b / (2 * a);
      document.getElementById(
        "rootsOutput"
      ).innerText = `Roots are real and the same: ${root1}`;
    } else {
      document.getElementById("rootsOutput").innerText =
        "Roots are complex and different.";
    }
  } catch (error) {
    document.getElementById("rootsOutput").innerText = error;
  }
}

// Project 2: Generate Prime Numbers (1 to 100)
function generatePrimes() {
  try {
    let primes = [];
    for (let i = 2; i <= 100; i++) {
      let isPrime = true;
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) primes.push(i);
    }
    document.getElementById("primesOutput").innerText = `Primes: ${primes.join(
      ", "
    )}`;
  } catch (error) {
    document.getElementById("primesOutput").innerText = `Error: ${error}`;
  }
}

// Project 3: Normal Function
function studyFunctions() {
  try {
    function greet() {
      return "Hello!";
    }
    document.getElementById(
      "functionsOutput"
    ).innerText = `Greet Language: English, Message: ${greet()}`;
  } catch (error) {
    document.getElementById("functionsOutput").innerText = `Error: ${error}`;
  }
}

// Project 4: Arrow Function
function runArrowFunction() {
  try {
    let a = parseFloat(document.getElementById("arrowA").value);
    let b = parseFloat(document.getElementById("arrowB").value);

    if (isNaN(a) || isNaN(b)) {
      throw "Please enter valid numbers for a and b.";
    }

    const add = (a, b) => a + b;
    document.getElementById("arrowOutput").innerText = `Add: ${add(a, b)}`;
  } catch (error) {
    document.getElementById("arrowOutput").innerText = `Error: ${error}`;
  }
}

// Project 5: Inner Function
function runInnerFunction() {
  try {
    function outerFunction() {
      function innerFunction() {
        return "Inner!";
      }
      return innerFunction();
    }
    document.getElementById(
      "innerOutput"
    ).innerText = `Inner Function Result: ${outerFunction()}`;
  } catch (error) {
    document.getElementById("innerOutput").innerText = `Error: ${error}`;
  }
}

// Project 6: Anonymous Function
function runAnonFunction() {
  try {
    const anonFunc = function () {
      return "Anonymous!";
    };
    document.getElementById(
      "anonOutput"
    ).innerText = `Anonymous Function Result: ${anonFunc()}`;
  } catch (error) {
    document.getElementById("anonOutput").innerText = `Error: ${error}`;
  }
}

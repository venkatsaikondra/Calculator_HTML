
        const display = document.getElementById("display");

       
        function appendToDisplay(input)
         {
        
                display.value += input;
            
        }

        function calculate() {
            try {
                display.value = eval(display.value);
            } catch (e) {
                display.value = "Error";
            }
        }

        function clearDisplay() {
             display.value = "";
        }

        function deleteLast() {
             display.value = display.value.slice(0, -1);
        }

        function clearEntry() {
            clearDisplay();
        }
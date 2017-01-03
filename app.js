 $(document).ready(function(){
        $("form").submit(function(e) {
     e.preventDefault();
         $(".js-word-count").html(wordCount());
            	$("dl").removeClass("hidden");
            $(".js-unique-count").html(uniqueWordCount());      
                console.log(uniqueWordCount());
                averageWordLength();
                averageSentencLength();
        });

        function wordCount() {
        	var words = ($("#user-text").val()).split(" ");
        	return words.length;
        	
        }

        function old() {
            var words = ($("#user-text").val()).split(" ");

            var obj = {};

            for (var i = 0; i < words.length; i++) {
                    if (words[i] in obj) {
                        obj[words[i]] += 1;
                    } else {
                             obj[words[i]] = 1;
                    }

            }
                var maxCount = 0;
                var currentMaxCountWord = ""; 

                    for (var key in obj) {
                        if (obj[key] > maxCount) {
                            currentMaxCountWord = key; 
                            maxCount = obj[key];
                        }
                    }

                return currentMaxCountWord;

                
        }
            function uniqueWordCount() {
                var words = ($("#user-text").val()).split(" ");

                var arr = [];
                
                for (var i = 0; i < words.length; i++) {
                    if (arr.indexOf(words[i]) == -1)  {
                        arr.push(words[i]);
                    }
                }
                    return arr.length;

            }

            function averageWordLength() {
                var words = ($("#user-text").val()).split(" ");
                console.log(words);
                var total = words.join("").length; 
                console.log(words.join(""));
                /*for (var i = 0; i < words.length; i++) {
                    total += words[i];
                }*/
                    console.log(total);

                    $(".js-average-word-length").html(total / wordCount());

            }

            function averageSentencLength() {

                var sentence = ($("#user-text").val()).split(/\./);
                var words = ($("#user-text").val()).split(" ");
                console.log(sentence);
                words = words.join("");

                $(".js-average-sentence-length").html(words.length / sentence.length);


}






















            
    });
       
       





























def solution(seoul):
    for index, name in enumerate(seoul):
        if name == "Kim":
            answer = "김서방은 "+str(index)+"에 있다" 
            return answer
         
        
#---------------------------------------------------------
# JS
# function findKim(seoul){
#  var idx = seoul.indexOf('Kim');
#  return "김서방은 " + idx + "에 있다";
# }

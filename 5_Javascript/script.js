function getrandomcolor() {
            /*每個元素間用''去間隔,並且從String轉換成Array*/
            var letters = '0123456789ABCDEF'.split('');
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
        var createtime;
        var clickedtime;
        var reactiontime;
        /*建立square重建的時間*/
        function makebox() {
            var randtime = (Math.random() * 10000) % 3000;
            randtime = Math.floor(randtime);
            setTimeout(function () {
                /*1/2的機率選擇shape*/
                if (Math.random() > 0.5) {
                    document.getElementById("square").style.borderRadius = "100px";
                } else {
                    document.getElementById("square").style.borderRadius = "0px";
                }
                var top = Math.random() * 400;
                var left = Math.random() * 800;
                document.getElementById("square").style.top = top + "px";
                document.getElementById("square").style.left = left + "px";
                document.getElementById("square").style.display = "block";
                /*呼叫getrandomcolor()回傳得color*/
                document.getElementById("square").style.backgroundColor = getrandomcolor();
                /*計算當前時間,單位為ms的速度在跑,很快*/
                createtime = Date.now();
            }, randtime)
        }
        document.getElementById("square").onclick = function () {
            this.style.display = "none";
            /*計算當前點擊時間*/
            clickedtime = Date.now();
            /*反應時間*/
            reactiontime = (clickedtime - createtime) / 1000;
            document.getElementById("time").innerHTML = reactiontime + "s";
            makebox();
        }
        makebox();
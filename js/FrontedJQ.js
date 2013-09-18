<script>
var defaultSettings = {
""DataAnalysis"": [" + dbpull.ToString().ToLower() + @", """"], ""DeviceDownload"": [" + (!dbpull).ToString().ToLower() + @", """"]
};
var pagepath = """ + context.Request.Path + @""";

$().ready(function () {
    function A() {
        
        if (q) {
            u(""Saving..."");
            $.ajax(pagepath, {
                contentType: ""text/plain"",
                type: ""POST"",
                data: ""saveSettings\n"" + B()
            }).done(function (d) {
                defaultSettings = d;
                //x();
                //y();
                //r(j);
                opener.location = ""patients.aspx"";
                v()
            }).fail(function (d) {
                u(""Error while saving."", d)
            })
        } else v()
    }

    function v() {
        window.close()
    }

    function y() {
        function d(h, c) {
            $el = $(h);
            var a = $el.find('input[type=""radio""]'),
                b = !! a.prop(""checked""); //coerce to Boolean
            var ab;
           
            
            if (!c) {
                a = a.val();
                k[a].defaultch = b;
                for (var i in k)
                {
                    if (k[i].name != a)
                     {
                        k[i].defaultch = !b;
                     }
                }

            }
        }
        n.empty(); //ul in left container
        $.each(k,
            function (h, c) {
                $('<li class=""graphNode""><input type=""radio"" name = ""DefaultSettings"" value=""' + c.name + '"" />&nbsp<img src=""/Site/CliniProWeb/Styles/images/' + c.name + '.png""> <span>&nbsp' + c.displayName + ""</span></li>"").appendTo(n).find(""input"").prop(""checked"", c.defaultch ? ""checked"" : """")
            });
        var e = $(""#graphList .graphNode"");
       
         e.find('input[type=""radio""]').click(function () {
            q = true;
            
            d($(this).parent(), false);
        });
        e.each(function () {
            
            d(this, true)

        }).click(function () {
           
           
           r($(this).find('input[type=""radio""]').val())
            
        });
    }  

    function x() {
        k = {};
        var d;
        $.each(defaultSettings, function (e, h) {
            (d = e);
            var f;
            
            if (h[0] == true)
                f = true;
            else
                f = false;
            k[e] = {
                name: e,
                displayName: m[e],
                
                defaultch: f
            
            }
            //if (f == true)
                //return d;
        });
        return d
    }


    function B() {
     return k[""DataAnalysis""].defaultch.toString();
    }
    var m = {
      DeviceDownload: ""Device Download"",
      DataAnalysis: ""Analysis Reports""
    },
        k, z, w, p, s;
    (function () {
        var d = $(""<table>"").appendTo(document.body),
            e = $(""<tr>"").appendTo(d);
        e = $('<td colspan=""2"" id=""topDivider"">').appendTo(e);
        z = $('<div id=""topContainer"">').appendTo(e);
        e = $(""<tr>"").appendTo(d);
        var h = $('<td id=""middleDivider"">').appendTo(e);
        w = $('<div id=""leftContainer"">').appendTo(h);
        e = $(""<td>"").appendTo(e);
        p = $('<div id=""rightContainer"">').appendTo(e);
        d = $(""<tr>"").appendTo(d);
        d = $('<td colspan=""2"" id=""bottomDivider"">').appendTo(d);
        s = $('<div id=""bottomContainer"">').appendTo(d)
    })();
  
    var q = false;
    z.text(""Please Select an Option from Below"");
    var u;
    (function () {
        var d = $('<div id=""status""></div>').appendTo(s).dblclick(function () {
            alert(void 0)
        });
        u = function (e) {
            d.text(e)
        };
        $('<input type=""button"" value=""OK""/>').appendTo(s).click(A);
        $('<input type=""button"" value=""Cancel""/>').appendTo(s).click(v)
    })();
    var n;
    n = $('<ul id=""graphList""></ul>').appendTo(w);
    
    var r, t, j;
    (function () {
        
        r = function (e) {
            
            
            //j = e;
            //t = B();
            p.empty();
            p.append($('<div class=""noOptions"">Upon loading a patient, the ' + k[$('input[type=radio]').filter(':checked').val()].displayName + ' window will display by default.<br /><br />To change the default page, please select the desired page option to be displayed upon patient selection</div>'))
        }
    })();
    (function () {
        var d =
            x();
        y();
        r(d)
    })()
});
</script>

</head>
<body></body>
</html>
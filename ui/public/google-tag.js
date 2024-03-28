window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-434784300');

function gtag_report_conversion(url) {
    var callback = function () {
      if (typeof(url) != 'undefined') {
        window.location = url;
      }
    };
    gtag('event', 'conversion', {
        'send_to': 'AW-434784300/mr_iCPml4IkZEKyQqc8B',
        'value': 1.0,
        'currency': 'INR',
        'event_callback': callback
    });
    return false;
}
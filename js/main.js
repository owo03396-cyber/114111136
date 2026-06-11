const alertTrigger = document.getElementById('liveAlertBtn');

if (alertTrigger) {
    alertTrigger.addEventListener('click', () => {
        appendAlert('Nice, you triggered this alert message!', 'success');
    });
}
document.getElementById("profilePhoto").addEventListener("click", function () {
    alert("不要以為我不知道你在戳我");
});
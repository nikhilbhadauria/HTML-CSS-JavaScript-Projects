document.addEventListener('DOMContentLoaded', function () {
    const copyText = document.querySelector("textarea[name='copyTxt']");
    const finalText = document.querySelector("textarea[name='finalTxt']");
    const moveBtn = document.querySelector(".move-btn");
    const copyBtn = document.querySelector(".copy-btn");
    const notification = document.getElementById("notification");
    const optionBtns = document.querySelectorAll(".option-btn");
    const clearBtn = document.getElementById("clearBtn");

    copyBtn.addEventListener("click", () => {
    const temp = copyText.value.trim();
    if (temp) {
        copyToClipboard(temp);
        showNotification("Text copied to clipboard!");
    } else {
        showNotification("Please enter some text first!", "error");
    }
    });

    moveBtn.addEventListener("click", () => {
    const temp = copyText.value.trim();
    if (temp) {
        finalText.value = temp;
        finalText.classList.add("highlight");
        setTimeout(() => finalText.classList.remove("highlight"), 600);
        showNotification("Text moved successfully!");
    } else {
        showNotification("Nothing to move!", "error");
    }
    });

    optionBtns.forEach(btn => {
    btn.addEventListener("click", function () {
        const action = this.dataset.action;
        if (action) transformText(action);
    });
    });

    clearBtn.addEventListener("click", () => {
    copyText.value = "";
    finalText.value = "";
    showNotification("Cleared all text", "error");
    });

    [copyText, finalText].forEach(textarea => {
    textarea.addEventListener("click", function () {
        this.select();
    });
    });

    function copyToClipboard(str) {
    navigator.clipboard.writeText(str).catch(() => {
        const textarea = document.createElement('textarea');
        textarea.value = str;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    });
    }

    function showNotification(message, type = "success") {
    notification.textContent = message;
    notification.className = "notification show";
    notification.style.backgroundColor =
        type === "error" ? "var(--warning)" : "var(--success)";
    setTimeout(() => {
        notification.classList.remove("show");
    }, 3000);
    }

    function transformText(action) {
    let text = copyText.value;
    switch (action) {
        case "uppercase":
        copyText.value = text.toUpperCase();
        break;
        case "lowercase":
        copyText.value = text.toLowerCase();
        break;
        case "capitalize":
        copyText.value = text.replace(/\b\w/g, char => char.toUpperCase());
        break;
    }
    showNotification(`Text transformed to ${action}!`);
    }
});

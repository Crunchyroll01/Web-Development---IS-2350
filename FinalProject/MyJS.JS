function updateTotal() {
    if (document.getElementById("ticketType").value == "general") {
        document.getElementById("TicketTotal").textContent = "Total: $50.00";
    } else if (document.getElementById("ticketType").value == "student") {
        document.getElementById("TicketTotal").textContent = "Total: $15.00";
    } else if (document.getElementById("ticketType").value == "vip") {
        document.getElementById("TicketTotal").textContent = "Total: $75.00";
    } else if (document.getElementById("ticketType").value == "none") {
        document.getElementById("TicketTotal").textContent = "Total: $0.00";
    }
}
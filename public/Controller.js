document.querySelectorAll(".Button_Detail").forEach((Item ) => {
    Item.addEventListener("click" , (e) => {
        const id = e.target.dataset.idmassage
        window.location.href = `/detail/${id}`
    })
})


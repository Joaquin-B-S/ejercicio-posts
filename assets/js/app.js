// Función para obtener los posts y mostrarlos en el HTML
async function obtenerPosts() {
    const url = "https://jsonplaceholder.typicode.com/posts";

    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();

        const postData = document.getElementById("post-data");
        postData.innerHTML = "";

        datos.forEach((post) => {
            const li = document.createElement("li");
            li.innerHTML = `${post.title} </br> ${post.body}`;
            postData.appendChild(li);
        });
    } catch (error) {
        console.error("Error al obtener los datos:", error);
        const postData = document.getElementById("post-data");
        postData.innerHTML = "Error al obtener los datos.";
    }
}

function getPosts() {
    obtenerPosts();
}

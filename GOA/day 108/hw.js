// document.getElementById('searchBtn').addEventListener('click', function() {
//     const username = document.getElementById('username').value;
//     fetchUserInfo(username);
// });

// async function fetchUserInfo(andriaii) {
//     const url = `https://api.github.com/users/${andriaii}`;
//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error('User not found');
//         }
//         const data = await response.json();
//         displayUserInfo(data);
//     } catch (error) {
//         document.getElementById('userInfo').innerHTML = `<p style="color: red;">${error.message}</p>`;
//     }
// }

// function displayUserInfo(user) {
//     const userInfo = `
//         <img src="${user.avatar_url}" alt="${user.login}" width="100" />
//         <h2>${user.login}</h2>
//         <p>${user.bio || 'No bio available'}</p>
//         <p>Public Repositories: ${user.public_repos}</p>
//         <a href="${user.html_url}" target="_blank">View Profile on GitHub</a>
//     `;
//     document.getElementById('userInfo').innerHTML = userInfo;
// }

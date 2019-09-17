document.addEventListener('DOMContentLoaded', function(){

    const list = document.querySelector('#song-list ul');
    const listenedList = document.querySelector('#listened-list ul');
    list.addEventListener('click', function(e){
        if(e.target.className == 'listened'){
            const li = e.target.parentElement;
            li.getElementsByTagName('span')[1].remove();
            listenedList.append(li);
        }
    })

    const addForm = document.forms['add-song'];
    addForm.addEventListener('submit', function(e){
        e.preventDefault();
        const value = document.getElementById('addedSongName').value;

        const li = document.createElement('li');
        const songName = document.createElement('span');
        const btnListened = document.createElement('span');

        songName.innerText = value;
        btnListened.innerText = 'listened';

        songName.classList.add('name');
        btnListened.classList.add('listened');

        li.appendChild(songName);
        li.appendChild(btnListened);
        list.appendChild(li);
    })

    const searchBar = document.getElementById('songSearch');
    searchBar.addEventListener('keyup', function(e){
        const term = e.target.value.toLowerCase();
        const songs = list.getElementsByTagName('li');
        Array.from(songs).forEach(function(song){
            const name = song.firstElementChild.textContent;
            if(name.toLowerCase().indexOf(term) != -1){
                song.style.display = 'block';
            }else{
                song.style.display = 'none';
            }
        })
    })
})
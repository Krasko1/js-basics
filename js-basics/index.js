// const video = {
//     title: 'a',
//     play() {
//         console.log(this);
//     }
// };

// video.play();

function playVideo() {
    console.log(this);
}

// playVideo();

function Video(title) {
    this.title = title;
    console.log(this);
}

// const v = new Video('b');

const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag){
            console.log(this.title, tag);
        }, this);
    }
};

video.showTags();

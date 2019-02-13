const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        // not good
        const self = this;
        this.tags.forEach(function(tag){
            console.log(self.title, tag);
        }, this);
    }
};

// video.showTags();

// function playVideo(a, b) {
//     console.log(this);
// }

// playVideo();
// playVideo.call({name: 'Vlada'}, 1, 2);
// playVideo.apply({name: 'Vlada'}, [1, 2]);
// playVideo.bind({name: 'Vlada'})();

const video1 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag){
            console.log(this.title, tag);
        }.bind(this));
    }
};

// video1.showTags();

const video2 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(tag => {
            console.log(this.title, tag);
        });
    }
};

video2.showTags();


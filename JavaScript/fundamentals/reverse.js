const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";

console.time('story1');
const reversed1 = story.split("").reverse().join("");
console.timeEnd('story1');


console.time('story2');
const reversed2 = function() {
  let storys = story;
  for (let i=0; i<story.length/2; i++) {
    [storys[i], storys[story.length-1-i]] = [storys[story.length-1-i],storys[i]];
  }
  return storys;
}
console.timeEnd('story2');
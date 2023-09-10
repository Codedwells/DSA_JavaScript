// Given two crystal balls that will breaks if dropped from a high enough distance,
// determin the exact spot in which it will break the most amount of times in the
// most optimal way.

// Solution: Binary Search

function two_crystal_balls(breaks:boolean[]):number{
    const jmpAmount = Math.floor(Math.sqrt(breaks.length));

    let i = jmpAmount;

    for (; i < breaks.length; i += jmpAmount){
        if (breaks[i]){
            break;
        }
    }

    i -= jmpAmount;

    for (; i < breaks.length; i++){
        if (breaks[i]){
            break;
        }
    }

    return -1;

}


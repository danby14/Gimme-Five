export function useTally(votes) {
  let counter = [0, 0, 0, 0, 0];
  if (votes) {
    votes.forEach(vote => {
      switch (vote) {
        case 1:
          counter[0] += 1;
          break;
        case 2:
          counter[1] += 1;
          break;
        case 3:
          counter[2] += 1;
          break;
        case 4:
          counter[3] += 1;
          break;
        case 5:
          counter[4] += 1;
          break;
        default:
          console.log('uh oh');
          break;
      }
    });
  }
  return counter;
}

cconst assert = require('assert');

function countBatteriesByHealth(presentCapacities) {
  let healthy=0;
  let exchange=0
    let failed=0

 for(let i=0;i<presentCapacities.length;i++){
if((100*presentCapacities[i]/120)>80){
healthy++
}
else if((100*presentCapacities[i]/120)<=80&&(100*presentCapacities[i]/120)>63){
  exchange++
}
else{
  failed++
}
 }
  return {
    healthy,
    exchange,
    failed,
  };
}

function testBucketingByHealth() {
  console.log('Counting batteries by SoH...');
  const presentCapacities = [113, 116, 80, 95, 92, 70];
  counts = countBatteriesByHealth(presentCapacities);
  assert(counts["healthy"] == 2);
  assert(counts["exchange"] == 3);
  assert(counts["failed"] == 1);
  console.log("Done counting :)");
}

testBucketingByHealth();

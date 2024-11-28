const getFeedbacks = async (range) => {
    const kv = await Deno.openKv();
    const count = await kv.get([range]);
    console.log(count.value);
    return count.value ?? 0;
};

const incrementFeedbacks = async (range) => {
    const kv = await Deno.openKv();
    let count = await getFeedbacks(range);
    count++;
    await kv.set([range], count);
};

export { getFeedbacks, incrementFeedbacks };
const removeAccents = string => {
    const accents = 'ÀÁÂÃÄÅĄàáâãäåąßÒÓÔÕÕÖØÓòóôõöøóÈÉÊËĘèéêëęðÇĆçćÐÌÍÎÏìíîïÙÚÛÜùúûüÑŃñńŠŚšśŸÿýŽŻŹžżź';

    return string
        .split('')
        .map(letter => accents.indexOf(letter) !== -1 ? '' : letter)
        .join('');
};

export default removeAccents;

function customRender(rElement, container){
    // container me eject krne k lie pehle ek dom element create kro then use appendchild krke inject kr dete...

    // element ka type bta do wo inject kr dega dom me ki p, a, koi bhi tag ho...
    /*const domElement = document.createElement(rElement.type);

    domElement.innerHTML = rElement.children;
    domElement.setAttribute('href', rElement.props.href)
    domElement.setAttribute('target', rElement.props.target)

    container.appendChild(domElement); */  

    // there is a problem in above code...we have to set the property each time manually...so below code is the solution

    const domElement = document.createElement(rElement.type);
    domElement.innerHTML = rElement.children;
    
    for (const prop in rElement.props) {
        if(prop === 'children') continue;

        domElement.setAttribute(prop, rElement.props[prop]);

        container.appendChild(domElement);
    }
    
}

const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'
    },
    children: 'click for google'
}

const mainContainer = document.querySelector("#root");

// (kise krna h, kha p krna h);
customRender(reactElement, mainContainer);
// abhi pta nhi h ki ye customrender work kse krega toh ek function create kar lenge...
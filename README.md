# Frontend Mentor - Job listings with filtering solution

This is a solution to the [Job listings with filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 


### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Filter job listings based on the categories



### Links

- Solution URL: https://job-listing-lake-nine.vercel.app/
- Live Site URL: https://github.com/bharathkumar369/job-listing



### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [GSAP] (https://gsap.com/)


### What I learned

i have learned logic behind search input to render the leayout.

```
    const filterJobs = data.filter((jobs) => {
        
        const roleMatch = jobs.position.toLowerCase().includes(props.searchInput.toLowerCase());
        
        const languageMatch = jobs.languages.some((language) => 
            language.toLowerCase().includes(props.searchInput.toLowerCase())
        );
        
        const levelMatch = jobs.level.toLowerCase().includes(props.searchInput.toLowerCase());

        const toolsMatch = jobs.tools.some((tools)=> tools.toLowerCase().includes(props.searchInput.toLowerCase()))
        
        return roleMatch || languageMatch || levelMatch || toolsMatch;
    })
```

### Continued development

i have gained confidence in resposiveness after making several projects.. now i have headed to animations which i can improve in further projects..


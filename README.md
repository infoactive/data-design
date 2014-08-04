# How We're Licensed

*Data. Design.* is licensed under the terms of a [Creative Commons BY-NC-SA license](https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode). The full legal code is at the link, but here's a quick human-readable breakdown for you as well. (Note: This is a human-readable summary of, and not a substitute for, the license.)

### By Attribution

If you use this book yourself, credit us! Basically, you just need to include a little snippet saying:

> Adapted from [Data. Design.](https://infoactive.co/data-design) by Trina Chiasson and Dyanna Gregory.
> Licensed under a Creative Commons BY-NC-SA 4.0 license. This work is not affiliated with or endorsed
> by the original authors.

Basically all you're saying is, "Hey, this was originally made by these peeps, go check it out. Any edits to this were made by me, not them." Pretty reasonable, right?

### Non-Commercial

If you fork and make edits to this book, you can't do it for monetary gain. The purpose of this book is to help people make better-informed decisions in collecting, analyzing, and presenting their data. And to do that free availability of this book is kind of a big deal. So don't sell it, mmkay?

### Share Alike

Finally, your version has to be licensed under the same terms as this one is. No telling people they can sell their derivatives, no telling people they don't have to attribute back to the original. Basically, just keep everything free and open.

### Well, What If...

Of course there are edge cases. There are times when you're just not going to be sure if doing `X` or `Y` will be kosher with the license or not. That's fine! Just [open an issue on GitHub](https://github.com/infoactive/data-design/issues) and let us know what's up. We'll talk it over and help you figure out if what you want to do is cool beans or if you should tweak your plans a little bit. It never hurts to ask!

# Can I Make Edits?

Of course you can! That's part of the reason we're making this book totally openly sourced. We love when the community takes the time and effort to contribute to things like this. There are two different routes we recommend, depending on what you want to do.

### Fork Us!

This is the best option if you want to go off in your own direction, or just want your own copy of the source for reference, or generally just don't think that you're in the mood to add a new chapter. For most people, this is the best option.

What's even better? This is super easy to do. Just go [to the repository](https://github.com/infoactive/data-design) and click `Fork` in the upper right corner. Voila! You're now the proud owner of a brand spanking new Data. Design. repository.

### Fork Us! (Redux)

Hey, wait a minute! What's up with this, didn't you say there were *two* routes? This is just the same thing all over again!

Whoops. You got us there. As it turns out, the first step is the same for both people who want to contribute back to our repo and those who don't: you just gotta fork it.

But alright, let's say you've got a great idea for a new chapter. What's the process for getting it accepted and published look like? Well,

1. Fork the main repository and [keep it synced](https://help.github.com/articles/fork-a-repo).
2. Open an [issue with us](https://github.com/infoactive/data-design/issues) and label it as a question. Let everyone know what you're thinking. Even if you have a great chapter idea, we can't guarantee that there's a good spot in the book to put it and we don't want you spending hours of your time writing something that we'll end up rejecting. Get feedback on the idea and make sure that it'll be a chapter we can use.
3. Start authoring! Here's where your fork comes in handy: you'll be making all chapter edits there.
4. Get reviewers. Go back to your GitHub issue, check with the commenters there, and see who would be willing to review your chapter for content, grammar, and style. Add them as contributors on your fork, let them make edits, etc.
5. Once you all think that the chapter's in a good place, create a pull request back to the main repository. That's when we'll go through and do an 'official' edit and suggest any changes we'd like to see before accepting your chapter.
6. Publish! We'll accept your pull request and you'll offically have a chapter in *Data. Design.* Congratulate yourself on a job well done and make sure that we didn't forget to add your information to our page of contributors.

### Rejecting Submissions

Let's say you go through the whole process of proposing, authoring, editing, and submitting a new chapter and we reject it. What happens next?

Well, that'll depend on your exact situation. It might be that we don't think the chapter is written to the standards of the rest of the book. If that's the case, revising and resubmitting is nearly always going to be an option. See if you can get input from someone whose chapter *has* been accepted; get another couple rounds of edits. And then edit it some more for good measure. Then go ahead and resubmit and see what happens!

Alternately, it might end up that the chapter that was proposed and the chapter that was delivered are significantly different&mdash;to the point that your delivered chapter isn't a great fit for the book. If that's the case, don't despair: you've still written a great chapter and can publish it on your forked repo. We're sorry that it didn't work out, but ask for feedback, see what needs to be changed for it to be accepted as an official edition.

Or for some entirely other reason that we can't predict, we might reject your chapter. If and when this happens, we're sorry. (Legitimately, we don't get any sick joy out of this!) We try to put quality checks in place to prevent this from happening in the first place, but we can't catch everything. Regardless, you're always encouraged to make whatever edits you would like to your forked repository: after all, that sort of personalization and community involvement is why we open sourced this in the first place.

That said, the best strategy is to just be proactive about your submission: get feedback early and get feedback often. This book was written by so many incredibly dedicated individuals, you shouldn't have any difficulty getting good, constructive feedback at every stage of the writing process. Take advantage of this. Even if we don't end up accepting your chapter, it'll still be something to be proud of having written.

# Building with Atlas

[[In Progress]]

Although, yes, we already have an HTML structure for the book, we still use an external platform to publish it. O'Reilley's [Atlas](https://atlas.oreilly.com/) allows us to take our book and publish it to a finalized (and slightly prettied-up) HTML version as well as to PDF, MOBI, and EPUB formats.

Now, if you're making an official contribution to our repository, this probably isn't too important to you since we'll be handling the actual releases. However, if you're striking it out on your own, you might want an easy way to publish your book to multiple print and web platforms. Once you've finalized the edits to your forked repo, sign up for a free trial at the link above and you'll have the option to import your repository. As long as you've kept everything to [HTMLbook spec](http://oreillymedia.github.io/HTMLBook/), Atlas should be able to process everything without a hitch when you build the project.
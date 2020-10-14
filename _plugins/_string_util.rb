require 'liquid'

module Jekyll

    module CapitalizeAll
        def capitalize_all(words)
            return words.split(' ').map(&:capitalize).join(' ')
        end
    end

    module LastIndexOf
        def last_index_of(words, str)
            return (words.include? str) ? words.length -  words.reverse.index(str) : -1
        end
    end
    
end

Liquid::Template.register_filter(Jekyll::CapitalizeAll)
Liquid::Template.register_filter(Jekyll::LastIndexOf)
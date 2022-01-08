import * as React from "react";
import {
    Button,
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ReactCountryFlag from "react-country-flag";

export function LanguageMenu(props: any) {
    return (<Menu >
        <MenuButton as={Button} aria-label='Options' rightIcon={<HamburgerIcon />} variant='outline'>
            Select the language
        </MenuButton>
        <MenuList>
            {props.languages.map((language: any) => {
                return <MenuItem icon={
                    <ReactCountryFlag countryCode={language.country} />} onClick={() => props.changeLanguage(language.code)}>
                    {language.language}
                </MenuItem>;
            })}

        </MenuList>
    </Menu>);
}
